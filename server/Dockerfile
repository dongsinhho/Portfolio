FROM --platform=linux/arm64/v8 mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
EXPOSE 3000     

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# copy everything else and build app
COPY . .
WORKDIR /app
RUN dotnet publish -c Release -o out

FROM --platform=linux/arm64/v8 mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DOTNET_RUNNING_IN_CONTAINER=true
ENTRYPOINT ["dotnet", "Server.dll"]