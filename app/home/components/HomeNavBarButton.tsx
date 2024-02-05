'use client'

interface HomeNavBarButtonProps {
    router: any,
    path: string,
    buttonName: string,
    style?: string
}

const HomeNavBarButton: React.FC<HomeNavBarButtonProps> = ({ router, path, buttonName, style }) => {

    const pushPathPage = (path: string) => {router.push(`/home/${path}`)}

    return (
        <button
        type="button"
        onClick={() => pushPathPage(path)}
        className={style}
        >
        <h2>{buttonName}</h2>
        {/* 아이콘 들어가는 위치 */}
        </button>
    )
}

export default HomeNavBarButton