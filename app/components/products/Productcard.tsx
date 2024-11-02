"use client";

import { formateprice } from "@/utils/formateprice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();

    // Ensure data and data.images are valid before accessing them
    const hasImage = data && Array.isArray(data.images) && data.images.length > 0;

    // Calculate average rating from reviews
    const averageRating = data.reviews.length > 0
        ? data.reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / data.reviews.length
        : 0;

    return (
        <div onClick={ () => router.push(`/product/${data.id}`) }  className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    {hasImage ? (
                        <Image fill className="w-full h-full object-contain" src={data.images[0].image} alt={data.name} />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-400">
                            No image available
                        </div>
                    )}
                </div>
                <div className="mt-4">{truncateText(data.name)}</div>
                <div>
                    <Rating value={averageRating} readOnly precision={0.5} />
                </div>
                <div>{data.reviews.length} reviews</div>
                <div className="font-semibold">{formateprice(data.price)}</div>
            </div>
        </div>
    );
};

export default ProductCard;
