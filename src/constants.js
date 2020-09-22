export const GRAPHQL_API = "http://localhost:1337/graphql";

export const GET_EMPLOYEES_QUERY = `
query {
  employees {
    employeeType
    profilePic
    name
    dob
    address
    phone
    email
    passwordDigest
    emergencyContactName
    emergencyContactPhone
    securityLicNo
    securityLicStatus
    rsaNo
    rsaLicStatus
    firstAidExp
  }
}`;
