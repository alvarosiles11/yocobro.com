import {SThemeThemes} from "servisofts-component";
import MapStyle from "./mapStyle";
import SConfig_Inputs from "./SConfig_Inputs";
const SThemeProps: SThemeThemes = {
  default: {
    barStyle: "light-content",
    barColor: "#FA790E",
    text: "#000000",
    primary: "#FA790E",
    secondary: "#ffffff",
    info: "#DE5738",
    background: "#ffffff",
    card: "#eeeeee99",
    mapStyle: MapStyle
  },
  dark: {
    barStyle: "light-content",
    barColor: "#FA790E",
    text: "#ffffff",
    primary: "#FA790E",
    secondary: "#000000",
    info: "#DE5738",
    background: "#000000",
    card: "#44444499",
    mapStyle: MapStyle
  }
};

const SocketProps = {
  name: "tapeke",
  debug: true,

  //  host: 'tapekeapp.com',
  //   ssl: true,
  host: "192.168.3.4",
  ssl: false,

  port: {
    native: 10040,
    web: 20040,
    http: 30040
  },
  cert:
    "MIID0jCCArqgAwIBAgIEY5PAKjANBgkqhkiG9w0BAQsFADCBqjELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxETAPBgNVBAsMCGdlb2xvZ2lhMSAwHgYDVQQDDBdnZW9sb2dpYS5zZXJ2aXNvZnRzLmNvbTEkMCIGCSqGSIb3DQEJARYVYWx2YXJvc2lsZXNAZ21haWwuY29tMB4XDTIyMTIwOTIzMDkzMFoXDTIyMTIxMDIzMDkzMFowgaoxCzAJBgNVBAYTAkJPMRIwEAYDVQQIDAlBdiBCYW56ZXIxEzARBgNVBAcMClNhbnRhIENydXoxFzAVBgNVBAoMDlNlcnZpc29mdHMgU1JMMREwDwYDVQQLDAhnZW9sb2dpYTEgMB4GA1UEAwwXZ2VvbG9naWEuc2Vydmlzb2Z0cy5jb20xJDAiBgkqhkiG9w0BCQEWFWFsdmFyb3NpbGVzQGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJncAHGu1Jkq0xtyiBv/P5PZ9TMs2z1jmMnZ1vGgPVRotF74tmXO45gXCuZowKl5bEpXWbeBfgtaQHaHW5VnuH+H4nyX4oaqq1ffKznLJmLnEPvx7nJZWAcRdu8oTuyL3LgCQe22pYVa0sgu667RH8iZd9AEgonsxQy4qchl3dvoVINNixYlIcz1yS3lJa2z1uuHoDqJTZYXbOuqdqZNNelVTdqdcu1M6DgxeB1upXf4PGNjDRJff5DxDL94RZyJ6GxU4+9d9Dec0VgYdUmO0EWcqrnq0du4p22RzSAhT3Vi6ibXc6i1B98cy/Khx/yk/GFjxKnlcJVfcuFj7zYuW38CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAB4H+VI0ISiiiZTMTV9xIfyJsyR7lGQCw7VrpjcGDwrXqz4ByM/dgla+swnTtFp40Sw8X9igHgIoV3HpGffdr0lvMpGDayLfljHbW0DhX77xwvV4BL66eI+hRGmKRt4JM9NCpkFB4hZFIrQIjnqVqdH0fo5qFcBGfw3sWM+WUL/6D4GPSAPWMU5wrw0MlSgQ2Hrxpd28llF5EbIzcphT3F7gMuggoYj/rZFbu+NZufyzeqWY+3HdrFupBdhXPsPihcGpLqbG9Pl+xu1a6RnsrQIRZ1PrlKeXsvRMJg0euy+Q/X04RZ8npMZ4G4Z+rbyDuOzuAZoqD0o3KNGXkqd9O5A==",
  apis: {roles_permisos: "https://rolespermisos.servisofts.com/http/"}
};
export default {
  SocketProps,
  SThemeProps,
  SConfig_Inputs
};
