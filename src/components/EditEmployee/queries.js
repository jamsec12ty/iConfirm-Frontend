import { gql } from "@apollo/client";

export const DELETE_EMPLOYEE_MUTATION = gql`
  mutation deleteEmployee($email: String) {
    deleteEmployee(email: $email) {
      email
    }
  }
`;

export const GET_EMPLOYEE_QUERY = gql`
  query getEmployee($email: String) {
    employee(email: $email) {
      employeeType
      profilePic
      name
      shifts
      dob
      address
      phone
      email
      emergencyContactName
      emergencyContactPhone
      securityLicNo
      securityLicStatus
      rsaNo
      rsaLicStatus
      firstAidExp
    }
  }
`;

export const UPSERT_EMPLOYEE_MUTATION = gql`
  mutation upsertEmployee(
    $employeeType: String
    $profilePic: String
    $name: String
    $shifts: [Shift]
    $dob: String
    $address: String
    $phone: String
    $email: String
    $passwordDigest: String
    $emergencyContactName: String
    $emergencyContactPhone: String
    $securityLicNo: String
    $securityLicStatus: Boolean
    $rsaNo: String
    $rsaLicStatus: Boolean
    $firstAidExp: String
  ) {
    upsertEmployee(
      employeeType: $employeeType
      profilePic: $profilePic
      name: $name
      shifts: $shifts
      dob: $dob
      address: $address
      phone: $phone
      email: $email
      passwordDigest: $passwordDigest
      emergencyContactName: $emergencyContactName
      emergencyContactPhone: $emergencyContactPhone
      securityLicNo: $securityLicNo
      securityLicStatus: $securityLicStatus
      rsaNo: $rsaNo
      rsaLicStatus: $rsaLicStatus
      firstAidExp: $firstAidExp
    ) {
      name
      address
      phone
      email
      emergencyContactName
      emergencyContactPhone
      securityLicNo
      securityLicStatus
      firstAidExp
    }
  }
`;
