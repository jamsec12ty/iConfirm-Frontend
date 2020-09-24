import { gql } from '@apollo/client';
export const GRAPHQL_API = "http://localhost:1337/graphql";

//TODO admin:
export const GET_VENUES_QUERY = gql`
query {
  venues{
  _id,
  logo,
  name,
  address,
  phone,
  email,
  licenseeName,
  liquorLicNo,
  liquorLicStatus,
  masterLicNo,
  masterLicExp,
  masterLicStatus,
  membershipDate,
    rosters{
      date
      employeeType
      shifts{
        date
        clockOnDate
        clockOffDate
        shiftConfirmed
        employee{
          profilePic
          name
          employeeType
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
    }
  }
}`;

// export const GET_ROSTERS_QUERY = gql`
// query {
//   rosters {
//     date,
//     employeeType,
//     shifts{
//       date,
//       clockOnDate,
//       clockOffDate,
//       shiftConfirmed,
//       employee{
//         profilePic
//         name
//         employeeType
//         dob
//         address
//         phone
//         email
//         emergencyContactName
//         emergencyContactPhone
//         securityLicNo
//         securityLicStatus
//         rsaNo
//         rsaLicStatus
//         firstAidExp
//     },
//   }
// }`;
//
// export const GET_SHIFTS_QUERY = gql`
// query {
//   shifts {
//     date,
//     clockOnDate,
//     clockOffDate,
//     shiftConfirmed,
//     employees{
//       name,
//       employeeType,
//       dob,
//       address,
//       phone,
//       email,
//       passwordDigest,
//       emergencyContactName,
//       emergencyContactPhone,
//       securityLicNo,
//       securityLicStatus,
//       rsaNo,
//       rsaLicStatus,
//       firstAidExp
//     }
//   }
// }`;
//
export const GET_EMPLOYEE_QUERY = gql`
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
    shifts{
      date
      clockOnDate
      clockOffDate
      shiftConfirmed
      roster{
        venue{
          name
        }
      }
    }
  }
}`;
