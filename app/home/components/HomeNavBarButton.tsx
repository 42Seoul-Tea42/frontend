'use client'

interface HomeNavBarButtonProps {
    router: any,
    path: string,
    buttonName: string
}

const HomeNavBarButton: React.FC<HomeNavBarButtonProps> = ({ router, path, buttonName }) => {

    const pushPathPage = (path: string) => {router.push(`/home/${path}`)}

    return (
        <button
        type="button"
        onClick={() => pushPathPage(path)}
        className=""
        >
        <h2>{buttonName}</h2>
        {/* 아이콘 들어가는 위치 */}
        </button>
    )
}

export default HomeNavBarButton