import react from 'react'

interface ListItem {
  id: number;
  href: string;
  text: string;
  onClick: () => void;
}

interface UnorderedListInterface {
  className: string;
  listData: ListItem[];
}

const UnorderedList: React.FunctionComponent<UnorderedListInterface>   = ({
  className,
  listData}
) => {

    return (
    <ul className={className}>
      {listData.map((item: ListItem) => (
        <li key={item.id}>
          <a href={item.href} onClick={item.onClick}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
    )
}


export default UnorderedList