import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery")

    // Ensure the gallery dump directory exists
    if (!fs.existsSync(galleryDir)) {
      fs.mkdirSync(galleryDir, { recursive: true })
    }

    const files = fs.readdirSync(galleryDir)

    // Filter only image files (jpg, jpeg, png, webp, gif, svg)
    const images = files
      .filter((file) => /\.(png|jpe?g|gif|webp|svg)$/i.test(file))
      .map((file) => `/gallery/${file}`)

    // If no custom photos are in the folder, return the default set
    if (images.length === 0) {
      const defaultSet = [
        "/images/chronograph_watch.png",
        "/images/f1_racing_car.png",
        "/images/server_racks.png",
        "/images/gym_barbell.png",
        "/images/skeleton_watch.png",
        "/images/f1_steering_wheel.png",
      ]
      return NextResponse.json(defaultSet)
    }

    return NextResponse.json(images)
  } catch (error) {
    console.error("Error loading gallery dump images:", error)
    return NextResponse.json([])
  }
}
