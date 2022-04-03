import { Guest } from "@prisma/client";

function GuestComponent({ guest }: { guest: Guest }) {
  const copyToClipboard = async () => {
    const url = "https://barbigiuppiejaco.it/?name=" + guest.name;
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(url);
    } else {
      return document.execCommand("copy", true, url);
    }
  };
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
        <button onClick={copyToClipboard}>Copy</button>
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {guest.helloNames} ({guest.name})
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {guest.confirmed ? "yes" : "no"}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {guest.accepted ? "yes" : "no"}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6 md:pr-0">
        {guest.adults} ({guest.expectedAdults})
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6 md:pr-0">
        {guest.children} ({guest.exceptedChildren})
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {guest.notes}
      </td>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
        {guest.updatedAt}
      </td>
    </tr>
  );
}

export default GuestComponent;
