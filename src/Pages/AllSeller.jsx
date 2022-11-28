import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";

const AllSeller = () => {
    const {
        isLoading,
        refetch,
        data: seller = [],
    } = useQuery({
        queryKey: ["seller"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller`);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    let sellerDelete = (id) => {
        fetch(`http://localhost:5000/seller/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`deleted successfully`);
                }
            });
    };
    return (
        <div className='container mx-auto'>
            <h1 className='uppercase text-center text-4xl font-bold border-b-8 m-2'>
                All seller
            </h1>

            <div className='overflow-x-auto m-4'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Email</th>
                            <th>Seller Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seller.map((seller, i) => (
                            <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.email}</td>
                                <td>{seller.name}</td>
                                {/* <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className='btn btn-xs btn-primary'>
                      Make Admin
                    </button>
                  )}
                </td> */}
                                <td>
                                    <button
                                        className='btn btn-sm btn-danger'
                                        onClick={() => sellerDelete(seller._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center m-10'>
                <Link
                    to='/desboard'
                    className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>
                    Back to desboard
                </Link>
            </div>
        </div>
    );
};

export default AllSeller;
