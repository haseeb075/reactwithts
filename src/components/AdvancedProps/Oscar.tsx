
type OscarProps={
    children: React.ReactNode
    // children: string

}

export default function Oscar(props: OscarProps) {
  return (
    <div>{props.children}</div>
  )
}
