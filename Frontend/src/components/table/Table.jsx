// Tabel Component
export default function TableComponent({ children }) {
  return <table className=" table-auto  w-full">{children}</table>;
}

// Table Head
export const TableHead = ({ children }) => {
  return (
    <thead>
      <tr className="text-sm">{children}</tr>
    </thead>
  );
};

// Table Body
export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// Table Row
export const TableBodyRow = ({ children }) => {
  return <tr>{children}</tr>;
};

// Table Body
export const TableHeadItem = ({ title }) => {
  return <th>{title}</th>;
};

// Table Body
export const TableBodyItem = ({ children }) => {
  return <td>{children}</td>;
};
