
export default function Post ({item,key}){
    const {title,body} = item;
    let box_s ='box_s'

    return (

        <div className={box_s}>
            <div>id:{key}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};
