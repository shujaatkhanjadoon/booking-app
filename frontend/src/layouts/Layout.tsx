interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps ) => {
    return(
        <div className="flex flex-col min-h-[50vh]">
            <section className="flex flex-1 py-10 container mx-auto">
                {children}
            </section>
        </div>
    )
}