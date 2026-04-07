## Настройка github pages + angular
### 1. Добавить пакет angular-cli-ghpages: `ng add angular-cli-ghpages`
<img width="576" height="259" alt="Pasted image 20260407172458" src="https://github.com/user-attachments/assets/ecccb705-3884-4611-8694-ef7b15346339" />

### 2. Дополнить package.json и angular.json
- в package.json добавить script: "deploy": "ng deploy"
<img width="609" height="255" alt="image" src="https://github.com/user-attachments/assets/444537b8-00c6-4527-9f1c-8fa4ba97c8d7" />

- в angular.json проверить что добавились конфиги для deploy (после 1 шага, установки либы)
- добавить в angular.json в блок projects.<ваш проект>.architect.build добавить "baseHref": "/<имя репозитория>/" /

Ваш проект - name из package.json (у меня "course"). \
Имя репозитория - то как у вас называется репозиторий (у меня например test-course). \
<img width="668" height="640" alt="image" src="https://github.com/user-attachments/assets/535db514-f684-47ee-82e7-8a63d91cc1bd" />


### 3. Добавить workflow для Githib Actions
Файл с расширением .yml по пути /.github/workflows

Пример: [https://github.com/anfinao/test-course/tree/main/.github/workflows
](https://github.com/anfinao/test-course/blob/main/.github/workflows/deploy.yml)

Обратить внимание: в строках "cd ./course" заменить course на свою папку, где лежит ангуляр-приложение

### 4. Запушить изменения в main
Должен запуститься actions. Если все ок, переходим к следующему шагу.
Проверить, что создалась ветка "gh-pages"

### 5. Перейти в настройки Github Pages
- Setting -> Pages
- выбрать в качестве активной ветки для сайта "gh-pages"
