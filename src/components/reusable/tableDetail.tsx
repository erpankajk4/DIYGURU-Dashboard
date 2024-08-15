import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type TableDetailProps = { database: any };

const TableDetail: React.FC<TableDetailProps> = ({ database }) => {
  const [isOn, setIsOn] = useState(true);
  const user = database?.data[0] || {};

  const fields = [
    { label: "Full Name", key: "name" },
    { label: "Regestration No.", key: "Regno" },
    { label: "Gender", key: "gender" },
    { label: "Specification", key: "Specification" },
    { label: "Course", key: "Course" },
    { label: "Admission Date", key: "AdmissionDate" },
    { label: "Registered Online", key: "RegisteredOnline" },
    { label: "Account Status", key: "AccountStatus" },
    { label: "Nationality", key: "Nationality" },
    { label: "(Province) State of Origin", key: "StateofOrigin" },
    { label: "ZIP / LGA (Of Origin)", key: "ZIP" },
    { label: "Town (Of Origin)", key: "Town" },
    { label: "Permanent Address", key: "PermanentAddress" },
    { label: "Residential Address", key: "ResidentialAddress" },
    { label: "Phone", key: "Phone" },
    { label: "Email", key: "Email" },
    { label: "Payments", key: "Payments", value: "Credit Card" },
  ];

  return (
    <Table className="my-8">
      <TableBody>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <TableRow className="bg-foreground/10">
              <TableCell className="font-medium w-2/5 border-r-2 border-foreground/30">
                {field.label}
              </TableCell>
              <TableCell>
                {field.label === "Account Status" ? (
                  <div className="flex items-center">
                    <button
                      onClick={() => setIsOn(!isOn)}
                      className={`relative w-9 h-5 flex items-center ${
                        isOn ? "bg-green-500" : "bg-red-500"
                      } rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none`}
                    >
                      <span
                        className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                          isOn ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <span className="ml-3 text-sm font-medium">
                      {isOn ? "ON" : "OFF"}
                    </span>
                  </div>
                ) : (
                  field.value || (user as any)[field.key] || ""
                )}
              </TableCell>
            </TableRow>
            <TableRow className="bg-transparent hover:bg-transparent">
              <TableCell className="h-4" />
              <TableCell />
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDetail;
