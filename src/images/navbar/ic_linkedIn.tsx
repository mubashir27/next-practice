import { ISvg } from "@/src/types/home";

export const LinkedIn = ({ icon_color }: ISvg) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.15402 5.99774C5.16102 5.99774 5.97735 5.18141 5.97735 4.17441C5.97735 3.16741 5.16102 2.35107 4.15402 2.35107C3.14702 2.35107 2.33069 3.16741 2.33069 4.17441C2.33069 5.18141 3.14702 5.99774 4.15402 5.99774Z"
        fill={icon_color || "#6E7CA0"}
      />
      <path
        d="M7.69646 7.37891V17.4947H10.8373V12.4922C10.8373 11.1722 11.0856 9.89391 12.7223 9.89391C14.3365 9.89391 14.3565 11.4031 14.3565 12.5756V17.4956H17.499V11.9481C17.499 9.22307 16.9123 7.12891 13.7273 7.12891C12.1981 7.12891 11.1731 7.96807 10.754 8.76224H10.7115V7.37891H7.69646ZM2.57812 7.37891H5.72396V17.4947H2.57812V7.37891Z"
        fill={icon_color || "#6E7CA0"}
      />
    </svg>
  );
};
