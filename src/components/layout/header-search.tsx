export const HeaderSearch = () => {
    return (
        <div>
            <input
                type="search"
                className="border border-gray-200 w-full pl-14 px-4 py-3 rounded-md outline-0 bg-no-repeat bg-[16px_50%] bg-[size:24px]"
                placeholder="O que você procura?"
                style={{
                    backgroundImage: 'url(/assets/ui/search.png)'
                }}
            />
        </div>
    );
}