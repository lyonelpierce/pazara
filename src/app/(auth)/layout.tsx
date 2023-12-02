const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="text-center py-2 text-3xl font-semibold text-blue-700">
        Pazara
      </p>
      {children}
    </div>
  );
};

export default Layout;
