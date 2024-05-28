export default function ArchiveLayout(context){
    return (
        <>
        <h1>News Archive</h1>
        <section id="archive-filter">{context.archive}</section>
        <h1>Latest Archive</h1>
        <section id="archive-latest">{context.latest}</section>
        </>
    );
}