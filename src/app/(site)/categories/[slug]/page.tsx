type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props) {
    const { slug } = await params;
    const filters = await searchParams;

    // TODO: pegas as informações da categoria

    return (
        <div>
            Slug: {slug}
        </div>
    )
}