import React from "react";
import AdminDashboard from "./AdminDashboard";
import StudentPage from "./StudentPage";
import StudentEnrolled from "./StudentEnrolled";
import EmployeePage from "./EmployeePage";
import CourseManagement from "./CourseManegment";
import Marking_Review from "./Marking&Review";
import StudentReport from "./StudentsReport";
import CourseReports from "./CourseReports";
import SkillAnalytic from "./SkillAnalytics";

const TabContent = ({
  activeTab,
  activeSubmenu,
  setMobileMenu,
  mobileMenu,
}: any) => {
  return (
    <>
      {/* Render components based on activeTab and activeSubmenu */}
      {activeTab?.label === "Dashboard" && !activeSubmenu && (
        <AdminDashboard
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Users" && activeSubmenu === "Student" && (
        <StudentPage
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Users" && activeSubmenu === "Teachers" && (
        <EmployeePage
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {/* Uncomment the following lines as needed */}
      {activeTab?.label === "Courses" && activeSubmenu === "Coure Management" && <CourseManagement
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />}
      {activeTab?.label === "Courses" && activeSubmenu === "Marking & Review" &&  <Marking_Review
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />}

      {activeTab?.label === "Report & Analytics" && activeSubmenu === "Student Reports" && (
        <StudentReport
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      
      {activeTab?.label === "Report & Analytics" && activeSubmenu === "Course Reports" && (
        <CourseReports
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      
      {activeTab?.label === "Report & Analytics" && activeSubmenu === "Skill Analytics" && (
        <SkillAnalytic
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      
      {activeTab?.label === "Report & Analytics" && activeSubmenu === "HR Analytics" && (
        <StudentEnrolled
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      
    
      {/* {activeTab?.label === "Communication" && (
        <CourseManagement
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Help & Support" && (
        <Marking_Review
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )} */}
    </>
  );
};

export default TabContent;
