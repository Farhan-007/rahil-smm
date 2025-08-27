// components/BlurryBackground.tsx
export default function BlurryBackground() {
  return (
    <div className="absolute bg-[#fae58a] inset-0 -z-10 overflow-hidden">
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#ff6900] rounded-full mix-blend-multiply filter blur-[180px] opacity-50"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#72b01d] rounded-full mix-blend-multiply filter blur-[200px] opacity-50"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#403d39] rounded-full mix-blend-multiply filter blur-[220px] opacity-40"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#eff8e2] rounded-full mix-blend-multiply filter blur-[200px] opacity-50"></div>
    </div>
  );
}