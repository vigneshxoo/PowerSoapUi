import { useParams, Link, useNavigate } from "react-router-dom";
// import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Sparkles, Truck, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/products/ProductCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/APi/ProductAPi";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [searchQuery, setSearchQuery] = useState("");

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [suggestedQuantities, setSuggestedQuantities] = useState<Record<string, number>>({});
    const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });

    const {
        data: product,
        isLoading,
        isError,
        error,
    } = useQuery<Product | undefined>({
        queryKey: ["product", id],
        queryFn: async () => {
            const data = await getProducts();
            return data.find((p) => p._id === id || p._id === id);
        },
        enabled: !!id,
    });
    const { data: allProducts = [] } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
    });
    if (isLoading) {
        return <div className="p-6">Loading product...</div>;
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Product not found</h2>
                    <Button onClick={() => navigate("/")}>Go Home</Button>
                </div>
            </div>
        );
    }

    const activeImage = selectedImage || product.image;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: "scale(2.5)"
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({
            transformOrigin: "center center",
            transform: "scale(1)"
        });
    };

    const suggestedProducts = allProducts.filter(
        (p) => (p._id || p._id) !== (product._id || product._id)
    );

    console.log(suggestedProducts);

    const handleSuggestedQuantityChange = (productId: string, quantity: number) => {
        setSuggestedQuantities((prev) => ({
            ...prev,
            [productId]: quantity,
        }));
    };

    return (
        <div className="min-h-screen bg-background">
            {/* <Sidebar /> */}
            <main className="lg:ml-64">
                {/* <Header 
                    
                    searchValue={searchQuery}
                    onSearchChange={setSearchQuery}
                /> */}

                <div className="p-4 sm:p-6 max-w-7xl mx-auto">
                    <Button
                        variant="ghost"
                        className="mb-6 gap-2"
                        onClick={() => navigate("/products")}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Products
                    </Button>

                    <div className="bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Product Image Section */}
                            <div className="p-6 md:p-8 flex flex-col-reverse md:flex-row gap-4 bg-white border-b md:border-b-0 md:border-r border-border/50">
                                {/* Thumbnails */}
                                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[500px] no-scrollbar">
                                    {product.images?.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(img)}
                                            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 overflow-hidden transition-all ${activeImage === img
                                                ? "border-primary ring-2 ring-primary/20"
                                                : "border-border hover:border-primary/50"
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${product.name} ${idx + 1}`}
                                                className="w-full h-full object-contain p-1"
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Main Image */}
                                <div className="flex-1 relative flex items-center justify-center min-h-[300px] md:min-h-[400px] overflow-hidden cursor-crosshair"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="relative w-full max-w-md aspect-square pointer-events-none">
                                        <img
                                            src={activeImage}
                                            alt={product.name}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-100 ease-linear"
                                            style={zoomStyle}
                                        />
                                        {product.mfs > 0 && (
                                            <span className="absolute top-0 right-0 flex items-center gap-1 rounded-full gradient-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
                                                <Sparkles className="h-3 w-3" />
                                                MFS {product.mfs}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Product Details Section */}
                            <div className="p-6 md:p-10 flex flex-col bg-card">
                                <div className="mb-auto">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 text-primary">
                                            {product.code}
                                        </span>
                                        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-md">
                                            {product.division}
                                        </span>
                                    </div>

                                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                                        {product.name}
                                    </h1>

                                    <div className="flex items-baseline gap-4 mb-6">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-primary">₹{product.boxPrice}</span>
                                            <span className="text-sm text-muted-foreground">per box</span>
                                        </div>
                                        <div className="h-10 w-px bg-border/60 mx-2"></div>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-semibold text-foreground">₹{product.netPrice}</span>
                                            <span className="text-sm text-muted-foreground">net price</span>
                                        </div>
                                    </div>

                                    {product.isOffer && product.offerDescription && (
                                        <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                                            <div className="flex items-center gap-2 mb-1 text-destructive font-bold">
                                                <Sparkles className="h-4 w-4" />
                                                <span>Special Offer</span>
                                            </div>
                                            <p className="text-sm font-medium text-foreground">{product.offerDescription}</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                                <Package className="h-4 w-4" />
                                                <span className="text-sm font-medium">Box Configuration</span>
                                            </div>
                                            <p className="text-lg font-semibold">{product.boxPieces} Pieces</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                                <Truck className="h-4 w-4" />
                                                <span className="text-sm font-medium">Delivery</span>
                                            </div>
                                            <p className="text-lg font-semibold">Available</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                            <span className="text-sm">Quality Assured Product</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <Sparkles className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm">Best Market Price</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border/50">
                                    <Button
                                        size="lg"
                                        className="w-full md:w-auto min-w-[200px] text-lg font-semibold"
                                        onClick={() => {
                                            addToCart(product, 1);
                                            navigate("/cart");
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Suggested Products */}
                    {suggestedProducts.length > 0 && (
                        <div className="mt-8 sm:mt-12">
                            <h2 className="text-xl sm:text-2xl font-bold mb-6">Similar Products</h2>
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
                                {suggestedProducts.map((p, index) => (
                                    <ProductCard
                                        key={p._id}
                                        product={p}
                                        quantity={suggestedQuantities[p._id] || 0}
                                        onQuantityChange={(qty) => handleSuggestedQuantityChange(p._id, qty)}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
