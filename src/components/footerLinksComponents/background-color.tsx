import React from "react";

function BackgroundColor() {
  return (
    <>
      {" "}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(235,0,144,0.1),transparent_70%)]"></div>{" "}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>{" "}
        </div>{" "}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(235,0,144,0.1),transparent_60%)]"></div>{" "}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>{" "}
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {" "}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff17a1]/5 rounded-full blur-3xl animate-pulse-slow"></div>{" "}
      </div>
    </>
  );
}

export default BackgroundColor;
