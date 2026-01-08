export default async function Page({ params }) {
  
    console.log(await params);
    const { slug } = await params

  return <div>I Am About page check console {slug}</div>
}