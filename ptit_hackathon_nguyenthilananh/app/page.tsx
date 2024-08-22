"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProduct] = useState<any>();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div className="flex my-28 gap-14 justify-center">
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-solid border-2 border-gray-200">STT</th>
                <th className="border-solid border-2 border-gray-200">
                  Tên sản phẩm
                </th>
                <th className="border-solid border-2 border-gray-200">
                  Hình ảnh
                </th>
                <th className="border-solid border-2 border-gray-200">Giá</th>
                <th className="border-solid border-2 border-gray-200">
                  Số lượng
                </th>
                <th className="border-solid border-2 border-gray-200">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product: any, index: number) => {
                return (
                  <tr className="text-center" key={product.id}>
                    <td className="border-solid border-2 border-gray-200">
                      {index + 1}
                    </td>
                    <td className="border-solid border-2 border-gray-200">
                      {product.name}
                    </td>
                    <td className="border-solid border-2 border-gray-200 w-56 h-56">
                      <img
                        src={product.image}
                        alt=""
                        className="w-full h-full"
                      />
                    </td>
                    <td className="border-solid border-2 border-gray-200">
                      {product.price}
                    </td>
                    <td className="border-solid border-2 border-gray-200">
                      {product.quantity}
                    </td>

                    <td className="border-solid border-2 border-gray-200 p-4 ">
                      <div className="flex justify-evenly gap-5">
                        <button className="bg-gray-200 rounded-md h-8 w-16">
                          Sửa
                        </button>
                        <button className="bg-red-400 rounded-md h-8 w-16 text-white">
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-96 h-full p-10 border-solid border-2 border-gray-200">
          <b>Thêm mới sản phẩm</b>
          <br />
          <br />
          <p>Tên</p>
          <input
            type="text"
            className=" h-7 border-solid border-2 border-gray-200"
          />
          <br />
          <br />
          <p>Hình ảnh</p>
          <input
            type="text"
            className=" h-7 border-solid border-2 border-gray-200"
          />
          <br />
          <br />
          <p>Giá</p>
          <input
            type="text"
            className=" h-7 border-solid border-2 border-gray-200"
          />
          <br />
          <br />
          <p>Số lượng</p>
          <input
            type="text"
            className=" h-7 border-solid border-2 border-gray-200"
          />
          <br />
          <br />
          <br />
          <div className="flex justify-center">
            <button className="h-8 bg-blue-400 text-white w-64 rounded-md">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
