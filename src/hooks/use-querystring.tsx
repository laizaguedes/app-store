import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { set } from "zod"

export const useQueryString = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return {
        get: (att: string) => {
            return searchParams.get(att);
        },
        set: (att: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if(value) {
                params.set(att, value);
            } else {
                params.delete(att);
            }
            router.push(`${pathname}?${params.toString()}`)
        }
    }
}