export default function SideNav({ scrolled }: { scrolled: boolean }) {
    return (
        <div className={`fixed right-0 h-100 w-10 z-60 top-50 bg-red-500 ${scrolled ? "animate-side-nav-reveal" : "animate-side-nav-hide"}`}>
        </div>
    )
}