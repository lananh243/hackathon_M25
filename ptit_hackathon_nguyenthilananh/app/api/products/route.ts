import { NextResponse } from "next/server"
import { products } from "../../database/data"

export async function GET(req: any, res: any) {
    return NextResponse.json({
        message: "Danh sách sản phẩm",
        data: products
    })
}

export async function POST(response: NextResponse) {
    const dataClient = await response.json();
    products.push(dataClient);
    return NextResponse.json({
        message: "Thêm sản phẩn thành công",
        newProduct: products
    }

    )
}