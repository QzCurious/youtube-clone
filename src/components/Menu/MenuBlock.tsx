interface Props {
    children: React.ReactNode
}

export default function MenuBlock({ children }: Props) {
    return (
        <section className="menu__block">
            {children}
        </section>
    )
}