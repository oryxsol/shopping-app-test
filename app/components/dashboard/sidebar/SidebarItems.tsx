/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import SidebarLinkGroup from "./SidebarLinkGroup";
const SidebarItem = () => {
  const pathname = usePathname();
  const storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  return (
    <aside className="space-y-4">
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="">
          <ul className="space-y-4 flex flex-col gap-1.5">
            <SidebarLinkGroup
              activeCondition={
                pathname === "/dashboard/users" || pathname.includes("users")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center border-b-2 border-[#E0E0E0] gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                        (pathname === "/dashboard/users" ||
                          pathname === "/dashboard/admin-users" ||
                          pathname.includes("users")) &&
                        "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.992493 1H6.98124V9H0.992493V1Z"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.992493 13H6.98124V17H0.992493V13Z"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.9737 9H16.9625V17H10.9737V9Z"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.9737 1H16.9625V5H10.9737V1Z"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Analytics
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "/dashboard/users" && "text-white"
                            }`}
                          >
                            All users
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "dashboar/admin-users" &&
                              "text-white"
                            }`}
                          >
                            Admin
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            <SidebarLinkGroup
              activeCondition={
                pathname === "/dashboard/users" || pathname.includes("users")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center border-b-2 border-[#E0E0E0] gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                        (pathname === "/dashboard/users" ||
                          pathname === "/dashboard/admin-users" ||
                          pathname.includes("users")) &&
                        "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.994385 18H18.9606M16.9644 18V14M16.9644 14C17.4938 14 18.0016 13.7893 18.3759 13.4142C18.7503 13.0391 18.9606 12.5304 18.9606 12V10C18.9606 9.46957 18.7503 8.96086 18.3759 8.58579C18.0016 8.21071 17.4938 8 16.9644 8C16.4349 8 15.9272 8.21071 15.5528 8.58579C15.1784 8.96086 14.9681 9.46957 14.9681 10V12C14.9681 12.5304 15.1784 13.0391 15.5528 13.4142C15.9272 13.7893 16.4349 14 16.9644 14ZM11.9737 18V4C11.9737 3.20435 11.6583 2.44129 11.0967 1.87868C10.5352 1.31607 9.77353 1 8.97938 1H4.98688C4.19272 1 3.43109 1.31607 2.86954 1.87868C2.30799 2.44129 1.99251 3.20435 1.99251 4V18M6.98313 14V18M5.985 10H7.98125M5.985 6H7.98125"
                          stroke="#364152"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Projects
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="space-y-4 mt-4 flex flex-col gap-2.5 pl-3">
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "/dashboard/users" && "text-white"
                            }`}
                          >
                            <svg
                              width="20"
                              height="16"
                              viewBox="0 0 20 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 15H3C2.46957 15 1.96086 14.7893 1.58579 14.4142C1.21071 14.0391 1 13.5304 1 13V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V7M12 11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10H18C18.2652 10 18.5196 10.1054 18.7071 10.2929C18.8946 10.4804 19 10.7348 19 11V14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15H13C12.7348 15 12.4804 14.8946 12.2929 14.7071C12.1054 14.5196 12 14.2652 12 14V11Z"
                                stroke="#364152"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Add Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "dashboar/admin-users" &&
                              "text-white"
                            }`}
                          >
                            <svg
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.994385 18H18.9606M16.9644 18V14M16.9644 14C17.4938 14 18.0016 13.7893 18.3759 13.4142C18.7503 13.0391 18.9606 12.5304 18.9606 12V10C18.9606 9.46957 18.7503 8.96086 18.3759 8.58579C18.0016 8.21071 17.4938 8 16.9644 8C16.4349 8 15.9272 8.21071 15.5528 8.58579C15.1784 8.96086 14.9681 9.46957 14.9681 10V12C14.9681 12.5304 15.1784 13.0391 15.5528 13.4142C15.9272 13.7893 16.4349 14 16.9644 14ZM11.9737 18V4C11.9737 3.20435 11.6583 2.44129 11.0967 1.87868C10.5352 1.31607 9.77353 1 8.97938 1H4.98688C4.19272 1 3.43109 1.31607 2.86954 1.87868C2.30799 2.44129 1.99251 3.20435 1.99251 4V18M6.98313 14V18M5.985 10H7.98125M5.985 6H7.98125"
                                stroke="#364152"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Project Table
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "dashboar/admin-users" &&
                              "text-white"
                            }`}
                          >
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5H17M7 9V15M11 9V15M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5"
                                stroke="#364152"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Deleted
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            <SidebarLinkGroup
              activeCondition={
                pathname === "/dashboard/users" || pathname.includes("users")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center border-b-2 border-[#E0E0E0] gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                        (pathname === "/dashboard/users" ||
                          pathname === "/dashboard/admin-users" ||
                          pathname.includes("users")) &&
                        "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.994385 19H18.9606M2.99063 19V5.00003L10.9756 1.00003V19M16.9644 19V9.00003L10.9756 5.00003M6.98313 7.00003V7.01003M6.98313 10V10.01M6.98313 13V13.01M6.98313 16V16.01"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Property
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "/dashboard/users" && "text-white"
                            }`}
                          >
                            All users
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "dashboar/admin-users" &&
                              "text-white"
                            }`}
                          >
                            Admin
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            <SidebarLinkGroup
              activeCondition={
                pathname === "/dashboard/users" || pathname.includes("users")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center border-b-2 border-[#E0E0E0] gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                        (pathname === "/dashboard/users" ||
                          pathname === "/dashboard/admin-users" ||
                          pathname.includes("users")) &&
                        "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.97372 1.00006V5.00006C9.97372 5.26528 10.0789 5.51963 10.2661 5.70717C10.4532 5.8947 10.7071 6.00006 10.9718 6.00006H14.9643M9.97372 1.00006H2.98685C2.45741 1.00006 1.94966 1.21077 1.57529 1.58585C1.20092 1.96092 0.990601 2.46963 0.990601 3.00006V5.00006M9.97372 1.00006L14.9643 6.00006M14.9643 6.00006V8.00006M14.9643 17.0001C14.9643 17.5305 14.754 18.0392 14.3796 18.4143C14.0053 18.7893 13.4975 19.0001 12.9681 19.0001H2.98685C2.45741 19.0001 1.94966 18.7893 1.57529 18.4143C1.20092 18.0392 0.990601 17.5305 0.990601 17.0001M0.990601 14.0001H1.00058M0.990601 11.0001H1.00058M0.990601 8.00006H1.00058M14.9643 11.0001H14.9743M14.9643 14.0001H14.9743"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Problem reports
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "/dashboard/users" && "text-white"
                            }`}
                          >
                            All users
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "dashboar/admin-users" &&
                              "text-white"
                            }`}
                          >
                            Admin
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            <SidebarLinkGroup
              activeCondition={
                pathname === "/dashboard/users" || pathname.includes("users")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center border-b-2 border-[#E0E0E0] gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                        (pathname === "/dashboard/users" ||
                          pathname === "/dashboard/admin-users" ||
                          pathname.includes("users")) &&
                        "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.30564 2.31709C8.73084 0.561092 11.2242 0.561092 11.6494 2.31709C11.7132 2.58089 11.8382 2.82587 12.0144 3.03209C12.1905 3.23831 12.4128 3.39995 12.6631 3.50384C12.9134 3.60773 13.1846 3.65094 13.4547 3.62996C13.7249 3.60898 13.9862 3.52439 14.2175 3.38309C15.7576 2.44309 17.5213 4.20909 16.5831 5.75309C16.4422 5.98475 16.358 6.24643 16.3371 6.51686C16.3162 6.7873 16.3593 7.05886 16.4628 7.30947C16.5664 7.56008 16.7276 7.78267 16.9332 7.95914C17.1388 8.13562 17.383 8.261 17.6461 8.32509C19.3988 8.75109 19.3988 11.2491 17.6461 11.6751C17.3828 11.739 17.1383 11.8643 16.9324 12.0408C16.7266 12.2173 16.5653 12.44 16.4616 12.6907C16.3579 12.9415 16.3147 13.2133 16.3357 13.4839C16.3566 13.7545 16.441 14.0163 16.5821 14.2481C17.5203 15.7911 15.7576 17.5581 14.2165 16.6181C13.9853 16.477 13.7241 16.3925 13.4542 16.3716C13.1843 16.3507 12.9132 16.3938 12.6631 16.4976C12.4129 16.6014 12.1908 16.7628 12.0146 16.9688C11.8385 17.1748 11.7133 17.4195 11.6494 17.6831C11.2242 19.4391 8.73084 19.4391 8.30564 17.6831C8.24184 17.4193 8.11678 17.1743 7.94062 16.9681C7.76446 16.7619 7.54219 16.6002 7.2919 16.4963C7.0416 16.3925 6.77036 16.3492 6.50025 16.3702C6.23014 16.3912 5.96879 16.4758 5.73747 16.6171C4.19736 17.5571 2.43368 15.7911 3.37192 14.2471C3.51275 14.0154 3.59704 13.7538 3.61794 13.4833C3.63883 13.2129 3.59574 12.9413 3.49216 12.6907C3.38859 12.4401 3.22745 12.2175 3.02185 12.041C2.81625 11.8646 2.57198 11.7392 2.30891 11.6751C0.556208 11.2491 0.556208 8.75109 2.30891 8.32509C2.57222 8.26117 2.81674 8.13587 3.02257 7.95938C3.22841 7.78289 3.38974 7.5602 3.49343 7.30944C3.59713 7.05868 3.64026 6.78693 3.61932 6.51631C3.59838 6.24569 3.51395 5.98384 3.37291 5.75209C2.43468 4.20909 4.19736 2.44209 5.73847 3.38209C6.73659 3.99009 8.03016 3.45209 8.30564 2.31709Z"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.98313 10.0001C6.98313 10.7957 7.29861 11.5588 7.86016 12.1214C8.42171 12.684 9.18334 13.0001 9.9775 13.0001C10.7717 13.0001 11.5333 12.684 12.0948 12.1214C12.6564 11.5588 12.9719 10.7957 12.9719 10.0001C12.9719 9.20444 12.6564 8.44138 12.0948 7.87877C11.5333 7.31616 10.7717 7.00009 9.9775 7.00009C9.18334 7.00009 8.42171 7.31616 7.86016 7.87877C7.29861 8.44138 6.98313 9.20444 6.98313 10.0001Z"
                          stroke="#121926"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Settings
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "/dashboard/users" && "text-white"
                            }`}
                          >
                            All Settings
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarItem;
