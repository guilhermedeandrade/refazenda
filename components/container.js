export default function Container({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-refazenda-vinyl-cover">
      {children}
    </div>
  )
}
