type ImageProfileProps = {
    src: string;
}
export default function ImageProfile(props: ImageProfileProps){
    return(
        <div className="flex justify-center align-middle ">
            <div className="mt-4 w-100">
        <img
            src={props.src}
            alt=""
            className="rounded"
            />
        </div>
    </div>
    );
}