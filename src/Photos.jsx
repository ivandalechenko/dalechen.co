import './styles/Photos.scss';
export default () => {
    return (
        <div className='Photos container'>
            <div className="masonry">
                {Array(69)
                    .fill(0)
                    .map((_, index) => {
                        return <img key={`img-${index}`} src={`/img/photo_${index + 1}_2025-09-06_18-11-22.webp`} loading="lazy" alt="" />
                    })}
            </div>
        </div>
    )
}