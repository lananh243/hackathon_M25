import { NextRequest, NextResponse } from "next/server"
import { products } from "../../../database/data"

export async function GET(req: any, res: any) {
    let findProduct = products.find((item: any) => {
        return item.id === +res.params.idProduct;
    })
    const { params } = res;
    return NextResponse.json({ message: findProduct ? findProduct : "Không tìm thấy sản phẩm" })
}
// PUT
export async function PUT(req: any) {
    const data = await req.json();
    return NextResponse.json({
        message: "Cập nhật sản phẩm thành công",
        product: data
    })
}
// DELETE
export async function DELETE(request: NextRequest) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    if (!id) {
        return NextResponse.json({
            message: "Không có ID của sản phẩm",
        });
    }
    const idNumber = parseInt(id, 10);
    const productsFilter = products.filter((item) => item.id !== idNumber);

    if (productsFilter.length === products.length) {
        return NextResponse.json({});
    }
    return NextResponse.json({
        message: "Xóa sản phẩm thành công!!",
        newProducts: productsFilter,
    });
}