import { FC, useEffect, useState } from "react";
import { modulesConfig } from "./modules";
import { ModulesInApp } from "./modules/config";
import { setTodosDefaultState, useAppDispatch } from "./store";

// Кнопка чтобы ререндерить верхнеуровнево
const AppRerenderButton = () => {
  const [clicked, setClicked] = useState<number>(0);
  console.log("App render");

  return (
    <div>
      <button onClick={() => setClicked((prev) => prev + 1)}>
        RerenderAllApp
      </button>
      {clicked}
    </div>
  );
};

/**
 * Список всех модулей
 */
const ModulesList: FC<{
  selectedModule: ModulesInApp;
  onSetModule: (selectedModule: ModulesInApp) => void;
}> = ({ onSetModule }) => {
  const onSelectModule = (key: string) => onSetModule(key as ModulesInApp);
  return (
    <>
      {Object.keys(modulesConfig).map((key) => {
        return <button onClick={() => onSelectModule(key)}>{key}</button>;
      })}
    </>
  );
};

export const App = () => {
  const [selectedModule, setSelectedModule] =
    useState<ModulesInApp>("ChacheData");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTodosDefaultState());
  }, [selectedModule]);

  const onSelectModule = (module: ModulesInApp) => setSelectedModule(module);
  return (
    <>
      <AppRerenderButton />
      <ModulesList
        onSetModule={onSelectModule}
        selectedModule={selectedModule}
      />
      <div className="moduleApp">{modulesConfig[selectedModule]}</div>
    </>
  );
};
