export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    visitors: 1240,
    projects: 25,
    technologies: 40
  });
}
