interface Props {
    children: React.ReactNode
}

export default function MenuBlock({ children }: Props) {
    return (
        <section className="py-3">
            {children}
        </section>
    )
}