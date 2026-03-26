// src/components/invoice/InvoicePDF.tsx

type InvoicePDFProps = {
  order: {
    _id: string;
    orderId: string;
    createdAt: string | Date;
    totalAmount: number;
    totalBoxes: number;
    items: Array<{
      quantity: number;
      pricePerBox: number;
      productId: {
        _id: string;
        name: string;
        image: string;
        boxPieces: number;
      };
    }>;
  };
};

const GST_PERCENT = 18;

const InvoicePDF = ({ order }: InvoicePDFProps) => {
  const subTotal = order.totalAmount;
  const gstAmount = (subTotal * GST_PERCENT) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const grandTotal = subTotal + gstAmount;

  const invoiceDate = new Date(order.createdAt);
  const dueDate = new Date(
    invoiceDate.getTime() + 30 * 24 * 60 * 60 * 1000
  );

  return (
    <div
      className="w-full bg-white text-gray-900 p-12 font-sans"
      style={{ fontSize: "13px" }}
    >
      {/* ================= HEADER ================= */}
      <div className="mb-8 pb-6 border-b-2 border-gray-200">
        <div className="flex justify-between items-start">
          {/* COMPANY */}
          <div>
            <h1 className="text-3xl font-bold text-[#1DB0A1] mb-1">
              POWER SOAP
            </h1>
            <div className="text-xs text-gray-600 leading-relaxed mt-2">
              <p>📍 Karaikkal, Puducherry 609602</p>
              <p>🏢 GSTIN: 33ABCDE1234F1Z5</p>
              <p>📧 contact@powersoap.com | 📱 +91 98765 43210</p>
            </div>
          </div>

          {/* INVOICE META */}
          <div className="text-right">
            <div className="inline-block bg-[#1DB0A1] text-white px-4 py-2 rounded-lg mb-3">
              <h2 className="text-2xl font-bold">INVOICE</h2>
            </div>
            <div className="text-xs text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Invoice #:</span>{" "}
                {order.orderId}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {invoiceDate.toLocaleDateString("en-IN")}
              </p>
              <p>
                <span className="font-semibold">Due Date:</span>{" "}
                {dueDate.toLocaleDateString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BILL TO ================= */}
      <div className="mb-8 grid grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
            Bill To
          </p>
          <div className="text-sm text-gray-800">
            <p className="font-semibold">Test Distributor</p>
            <p>Puducherry - 609602</p>
            <p className="text-xs text-gray-600">
              GSTIN: 33XYZAB5678C1D9
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
            Ship To
          </p>
          <div className="text-sm text-gray-800">
            <p className="font-semibold">Test Distributor</p>
            <p>Puducherry - 609602</p>
          </div>
        </div>
      </div>

      {/* ================= ITEMS TABLE ================= */}
      <table className="w-full mb-6 border-collapse">
        <thead>
          <tr className="bg-[#1DB0A1] text-white">
            <th className="px-3 py-3 text-left text-xs font-semibold">
              Item
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold">
              Boxes
            </th>
            <th className="px-3 py-3 text-right text-xs font-semibold">
              Price / Box
            </th>
            <th className="px-3 py-3 text-right text-xs font-semibold">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {order.items.map((item, idx) => {
            const product = item.productId;
            const amount = item.quantity * item.pricePerBox;

            return (
              <tr key={idx} className="border-b border-gray-200">
                <td className="px-3 py-3 text-sm font-medium text-gray-800">
                  {product.name}
                  <div className="text-xs text-gray-500">
                    {product.boxPieces * item.quantity} Pieces
                  </div>
                </td>

                <td className="px-3 py-3 text-sm text-center">
                  {item.quantity}
                </td>

                <td className="px-3 py-3 text-sm text-right">
                  ₹{item.pricePerBox.toLocaleString("en-IN")}
                </td>

                <td className="px-3 py-3 text-sm text-right font-semibold">
                  ₹{amount.toLocaleString("en-IN")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ================= TOTALS ================= */}
      <div className="flex justify-end mb-8">
        <div className="w-80">
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>₹{subTotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 my-3 space-y-2 text-xs">
            <div className="flex justify-between">
              <span>CGST (9%)</span>
              <span>₹{cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>SGST (9%)</span>
              <span>₹{sgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>GST Total</span>
              <span>₹{gstAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center py-3 px-3 bg-[#1DB0A1] text-white rounded-lg">
            <span className="font-bold">GRAND TOTAL</span>
            <span className="text-lg font-bold">
              ₹{grandTotal.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t pt-4 text-xs text-gray-600">
        <p className="text-center italic">
          This is a computer-generated invoice. No signature required.
        </p>
      </div>
    </div>
  );
};

export default InvoicePDF;
