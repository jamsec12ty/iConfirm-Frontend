export const GRAPHQL_API = "http://localhost:1337/graphql";


export const GET_VENUES_QUERY = `
query {
  venues{
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

export const GET_ROSTERS_QUERY = `
query {
  rosters {
    date,
    employeeType,
    shifts{
      date,
      clockOnDate,
      clockOffDate,
      shiftConfirmed,
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
    },
  }
}`;

export const GET_SHIFTS_QUERY = `
query {
  shifts {
    date,
    clockOnDate,
    clockOffDate,
    shiftConfirmed,
    employees{
      name,
      employeeType,
      dob,
      address,
      phone,
      email,
      passwordDigest,
      emergencyContactName,
      emergencyContactPhone,
      securityLicNo,
      securityLicStatus,
      rsaNo,
      rsaLicStatus,
      firstAidExp
    }
  }
}`;

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
