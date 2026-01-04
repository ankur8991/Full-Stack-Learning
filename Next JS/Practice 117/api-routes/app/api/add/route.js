import { NextResponse } from 'next/server';
 
export async function POST(request) {
    let data = await request.json()
    console.log(data)
    return NextResponse.json({success: true, data: "yes"})
    // return NextResponse.json({success: true, data: data}) 
    // Browser ko bhejna hai data to data: "yes" ki jagah data variable bhej do like this.
}
// But for demo purpose, I am sending static data "yes" back to browser.