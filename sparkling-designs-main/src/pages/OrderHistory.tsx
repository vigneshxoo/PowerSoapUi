import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  Package,
  Clock,
  CheckCircle2,
  Truck,
  AlertCircle,
  ShoppingBag,
  IndianRupee,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { getOrderHistory } from "@/APi/ProductAPi";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import gsap from "gsap";
import Skeleton from "react-loading-skeleton";
import { InventoryManagement_Nav } from "@/components/layout/navconfig/navConfig";
/* ---------------- helpers ---------------- */

const normalizeStatus = (status?: string) =>
  status ? status.toUpperCase() : "PENDING";

const getStatusIcon = (status: string) => {
  switch (normalizeStatus(status)) {
    case "DELIVERED":
      return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
    case "SHIPPED":
      return <Truck className="h-4 w-4 text-blue-500" />;
    case "PENDING":
      return <Clock className="h-4 w-4 text-amber-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-red-500" />;
  }
};

const getStatusStyles = (status: string) => {
  switch (normalizeStatus(status)) {
    case "DELIVERED":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "SHIPPED":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "PENDING":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-red-50 text-red-700 border-red-200";
  }
};

/* ---------------- component ---------------- */

const OrderHistory = () => {
  const navigate = useNavigate();

  /* pagination */
  const [page, setPage] = useState(1);
  const limit = 10;

  /* search (UI vs API) */
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  /* debounce search */
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchInput]);

  /* data fetch */
  const { data, isLoading } = useQuery({
    queryKey: ["OrderHistory", page, searchQuery],
    queryFn: () => getOrderHistory({ page, limit, searchQuery }),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    select: (res) => ({
      data: res.data,
      pagination: res.pagination,
    }),
  });

  const orders = data?.data || [];
  const pagination = data?.pagination;

  /* stats */
  const totalOrders = pagination?.total || 0;
  const totalBoxes = orders.reduce((a, o) => a + o.totalBoxes, 0);
  const totalSpent = orders.reduce((a, o) => a + o.totalAmount, 0);

  /* GSAP (hero once, rows on change) */
  const heroRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!hasAnimated.current && heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
        hasAnimated.current = true;
      }

      if (orders.length) {
        gsap.fromTo(
          "tbody tr",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [orders]);

  /* pagination numbers */
  const getPageNumbers = () => {
    const totalPages = pagination?.totalPages || 1;
    const current = pagination?.page || 1;
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 4) pages.push("...");
      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (current < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* <Sidebar /> */}

      <div className="lg:pl-64">
        {/* HEADER SEARCH */}
        {/* <Header navItems={InventoryManagement_Nav}
          searchValue={searchInput}
          onSearchChange={setSearchInput}
        /> */}

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-10">
          {/* HERO */}
          <div
            ref={heroRef}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase mb-4">
                <Clock className="h-3 w-3" />
                History & Tracking
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Order <span className="text-primary">History</span>
              </h1>
              <p className="text-gray-500 mt-2 text-sm">
                Track all past orders with complete details.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Total Orders", value: totalOrders, icon: ShoppingBag },
                { label: "Total Boxes", value: totalBoxes, icon: Package },
                {
                  label: "Total Spent",
                  value: totalSpent.toLocaleString(),
                  icon: IndianRupee,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-3xl bg-white border shadow flex gap-4 items-center"
                >
                  <div className="p-3 rounded-2xl bg-gray-100">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      {s.label}
                    </p>
                    <p className="text-xl font-semibold">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto bg-white rounded-2xl border shadow ">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left">Order ID</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Boxes</th>
                  <th className="px-6 py-4 text-left">Amount</th>
                  <th className="px-6 py-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {isLoading
                  ? Array.from({ length: limit }).map((_, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4" colSpan={5}>
                          <Skeleton height={20} />
                        </td>
                      </tr>
                    ))
                  : orders.map((o) => (
                      <tr
                        key={o._id}
                        onClick={() =>
                          navigate(`/order-details/${o._id}`)
                        }
                        className="cursor-pointer hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-semibold text-blue-500">
                          {o.orderId}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {new Date(o.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">{o.totalBoxes}</td>
                        <td className="px-6 py-4 font-semibold">
                          ₹{o.totalAmount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-xl border text-xs font-semibold inline-flex items-center gap-2",
                              getStatusStyles(o.status)
                            )}
                          >
                            {getStatusIcon(o.status)}
                            {normalizeStatus(o.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center pt-6">
            <p className="text-sm text-gray-500">
              Showing {orders.length} of {totalOrders}
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="p-2 rounded-xl border bg-white disabled:opacity-30"
              >
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 rounded-xl border bg-white disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {getPageNumbers().map((n, i) => (
                <button
                  key={i}
                  disabled={n === "..."}
                  onClick={() => typeof n === "number" && setPage(n)}
                  className={cn(
                    "min-w-[40px] h-10 rounded-xl text-sm font-semibold",
                    n === page
                      ? "bg-primary text-white"
                      : "bg-white border text-gray-600"
                  )}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((p) =>
                    Math.min(pagination?.totalPages || 1, p + 1)
                  )
                }
                disabled={page === pagination?.totalPages}
                className="p-2 rounded-xl border bg-white disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setPage(pagination?.totalPages || 1)}
                disabled={page === pagination?.totalPages}
                className="p-2 rounded-xl border bg-white disabled:opacity-30"
              >
                <ChevronsRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderHistory;
