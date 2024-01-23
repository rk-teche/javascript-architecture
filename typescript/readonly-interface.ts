type ReadOnlyProps<T> = {
    readonly [P in keyof T]: T[P];
}

interface Props {
    title: string,
    content: string
}

type ReadablePropsOnly = ReadOnlyProps<Props>

function ReadOnlyPropsComponent (props: Props) {
    // we can actually change the props
    props.title = "newly inserted title";
    props.content = "newly inserted content"

}

// what If we don't want user to change the props then
function ReadOnlyPropsComponent1 (props: ReadablePropsOnly) {
    // can't insert new property now
    // props.title = "newly inserted title";
    // props.content = "newly inserted content"

}