
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  id: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl?: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const PropertyCard = ({
  id,
  price,
  address,
  beds,
  baths,
  sqft,
  imageUrl,
  isNew = false,
  isPremium = false,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/property/${id}`} className="block">
      <div className="border rounded-lg overflow-hidden group property-card">
        <div className="relative">
          {/* Property image */}
          <div className="aspect-video bg-gray-100 w-full overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`Property at ${address}`}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className={cn(
              "absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center bg-white shadow-sm",
              isFavorite ? "text-red-500" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
          </button>

          {/* Badges */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {isNew && (
              <Badge variant="secondary" className="bg-homestream-500 text-white">
                New
              </Badge>
            )}
            {isPremium && (
              <Badge variant="secondary" className="bg-amber-500 text-white">
                Premium
              </Badge>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900">
              ${price.toLocaleString()}
            </h3>
          </div>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <span>{beds} bd</span>
            <span className="mx-1">•</span>
            <span>{baths} ba</span>
            <span className="mx-1">•</span>
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
          <p className="mt-1 text-sm text-gray-600 truncate">{address}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
