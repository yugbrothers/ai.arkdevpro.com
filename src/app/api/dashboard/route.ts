export async function GET() {
  return Response.json({
    projects: 6,
    skills: 8,
    status: "online"
  });
}
