"use client";

export default function Footer() {
  return (
    <footer className="border-t border-primary/30">
      <div className="container mr-auto">
        <div className="flex items-center justify-between p-8">
          <div>
            <h4 className="text-secondary  text-sm font-mono-alt  track-tight">
              THE IRON ARCHIVE
            </h4>
            <p className="text-sm">
              An independent study collection for curious minds.
            </p>
          </div>
          <div className=" text-center justify-self-center italic font-mono-alt text-primary">
            <p className="text-sm">© 2026 / Research edition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
