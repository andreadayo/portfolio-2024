import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  const screenshotsDir = path.join(
    process.cwd(),
    "public",
    "data",
    "projects",
    projectId
  );

  console.log(`Reading directory: ${screenshotsDir}`);

  if (!fs.existsSync(screenshotsDir)) {
    console.error("Project not found:", screenshotsDir);
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  const files = fs
    .readdirSync(screenshotsDir)
    .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));

  console.log(`Files found: ${files.join(", ")}`);

  const filePaths = files.map((file) => `/data/projects/${projectId}/${file}`);

  console.log(`Returning paths: ${filePaths.join(", ")}`);

  return NextResponse.json(filePaths);
}
