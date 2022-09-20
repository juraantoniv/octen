
export default function Post ({item}){
    const {title,body} = item;
    let box_s ='box_s'

    return (

        <div className={box_s}>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};
