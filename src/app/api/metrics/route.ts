export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    projects: 25,
    technologies: 40,
    experience: "3+ years"
  });
}
